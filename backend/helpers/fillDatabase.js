const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
const Attraction = require('../models/Attraction'); 
const Room = require('../models/Room');
const Type = require('../models/Type'); 
const Facility = require('../models/Facility'); 
const Activity = require('../models/Activity'); 

async function fillDatabase() {
  try {
    // Создание и сохранение отеля
    const hotel = new Hotel({
      name: 'Marins Park Hotel Екатеринбург',
      description: 'Современный отель с японским рестораном',
      address: 'ул. Челюскинцев, 106, Екатеринбург, Свердловская обл.',
      coordinates: '56.855979, 60.606233',
      overview: `Marins Park Hotel Yekaterinburg / «Маринс Парк Отель Екатеринбург» — комфортный отель 3* сети Marins Hotels, который раскрывает легендарное гостеприимство в самом сердце столицы Урала.
      Номерной фонд отеля насчитывает более 400 номеров. Все они оснащены удобными кроватями с мягкими подушками и воздушными одеялами, а также плазменными TV, скоростным Wi-Fi и кондиционером.
      Гости и жители Екатеринбурга традиционно выбирают сеть отелей Marins Hotels за теплый прием, безупречное обслуживание, заботу, радушие и настоящую атмосферу домашнего уюта.`,
      image: ['https://marinshotels.ru/upload/slides/max_6411c18221451.webp', 'https://marinshotels.ru/upload/slides/max_641176ae05ef2.webp', 'https://marinshotels.ru/upload/slides/max_641176e20e859.webp'],
      reviews_number: 6272,
      rate: 4.5,
    });
    const savedHotel = await hotel.save();

    const type = new Type({ name: 'Hotel and apartments', hotels: savedHotel._id });
    await type.save();

    const activity_spa = new Activity({ name: 'Spa', hotels: savedHotel._id });
    await activity_spa.save();
    const activity_pool = new Activity({ name: 'Pool', hotels: savedHotel._id });
    await activity_pool.save();
    const activity_cafe = new Activity({ name: 'Cafe', hotels: savedHotel._id });
    await activity_cafe.save();
    const activity_bar = new Activity({ name: 'Bar', hotels: savedHotel._id });
    await activity_bar.save();

    const facility_wifi = new Facility({ name: 'Wi-Fi', hotels: savedHotel._id });
    await facility_wifi.save();
    const facility_conditioning = new Facility({ name: 'Air conditioning', hotels: savedHotel._id });
    await facility_conditioning.save();
    const facility_parking = new Facility({ name: 'Parking available', hotels: savedHotel._id });
    await facility_parking.save();
    const facility_business = new Facility({ name: 'Business service', hotels: savedHotel._id });
    await facility_business.save();

    const attraction1 = new Attraction({
      name: 'Ельцин центр',
      hotels: [{ hotel: savedHotel._id, drive_time: 15 }],
    });
    await attraction1.save();
    const attraction2 = new Attraction({
      name: 'Екатеринбург Арена',
      hotels: [{ hotel: savedHotel._id, drive_time: 25 }],
    });
    await attraction2.save();

    const room = new Room({
      name: 'Стандарт улучшенный с односпальной кроватью',
      image: 'https://bk-api.marinsparkhotels.ru/uploads/File1675772430134ce63057f068a219a0df338fb0b723.jpg',
      sleeps: 1,
      description: 'Уютный номер для одного или ребенка',
      price: 80,
      hotel: savedHotel._id,
    });
    await room.save();

    const room2 = new Room({
      name: 'Стандарт с двухъярусной кроватью',
      image: 'https://bk-api.marinsparkhotels.ru/uploads/File1675767080b89c4cc90e26a826ef04a7adfea8c40d.jpg',
      sleeps: 2,
      description: 'Уютный номер для двоих с двухъярусной кроватью',
      price: 80,
      hotel: savedHotel._id,
    });
    await room2.save();

    const room3 = new Room({
      name: 'Стандарт улучшенный с двухспальной кроватью',
      image: 'https://bk-api.marinsparkhotels.ru/uploads/File16757725955aa7f8f71a707262ac6659cddc876e46.jpg',
      sleeps: 2,
      description: 'Уютный номер для двоих с двухспальной кроватью',
      price: 100,
      hotel: savedHotel._id,
    });
    await room3.save();

    savedHotel.rooms = [room._id, room2._id, room3._id]
    savedHotel.attractions = [attraction1._id, attraction2._id]
    savedHotel.activities = [activity_bar._id, activity_cafe._id, activity_pool._id, activity_spa._id]
    savedHotel.facilities = [facility_business._id, facility_conditioning._id, facility_parking._id, facility_wifi._id]
    savedHotel.types = [type._id]

    savedHotel.save()

    console.log('Данные успешно добавлены в базу данных.');
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

module.exports = fillDatabase;
