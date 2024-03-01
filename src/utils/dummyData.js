const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {no : "1", barang : "AC",                    merek : "Daikin",                  kategori : "Elektronik", jumlah : 2, date : moment().endOf('day')},
        {no : "3", barang : "Almari Kunci",          merek : "Premium AF",              kategori : "Furniture", jumlah : 1, date : moment().add(-1, 'd').endOf('day')},
        {no : "2", barang : "Almari Arsip",          merek : "Brother B-104",           kategori : "Furniture", jumlah : 9, date : moment().add(-1, 'd').endOf('day')},
        {no : "4", barang : "Dispenser",             merek : "Miyako",                  kategori : "Furniture", jumlah : 11, date : moment().add(-1, 'd').endOf('day')},
        {no : "5", barang : "Monitor",               merek : "Logitech",                kategori : "Elektronik", jumlah : 10, date : moment().add(-2, 'd').endOf('day')},
        {no : "6", barang : "PC",                    merek : "Ryzen",                   kategori : "Elektronik", jumlah : 3, date : moment().add(-2, 'd').endOf('day')},
        {no : "7", barang : "IMAC",                  merek : "Apple Imac Retina 27",    kategori : "Elektronik", jumlah : 3, date : moment().add(-2, 'd').endOf('day')},
        {no : "8", barang : "UPS",                   merek : "",                        kategori : "Elektronik", jumlah : 5, date : moment().add(-2, 'd').endOf('day')},
        {no : "9", barang : "Meja",                  merek : "",                        kategori : "Furniture", jumlah : 5, date : moment().add(-2, 'd').endOf('day')},
        {no : "10", barang : "Kursi Lipat",          merek : "Chitose",                 kategori : "Furniture", jumlah : 9, date : moment().add(-2, 'd').endOf('day')},
        {no : "11", barang : "Kursi Sekretaris",     merek : "Brother BR-504",          kategori : "Furniture", jumlah : 6, date : moment().add(-3, 'd').endOf('day')},
        {no : "12", barang : "Headset",              merek : "Tascam",                  kategori : "Elektronik", jumlah : 2, date : moment().add(-3, 'd').endOf('day')},
        {no : "13", barang : "Micrpohone Condenser", merek : "Tascam",                  kategori : "Elektronik", jumlah : 7, date : moment().add(-3, 'd').endOf('day')},
        {no : "14", barang : "Kamera",               merek : "Canon EOS 550D",          kategori : "Elektronik", jumlah : 7, date : moment().add(-3, 'd').endOf('day')},
        {no : "15", barang : "Kamera",               merek : "Sony HXR",                kategori : "Elektronik", jumlah : 7, date : moment().add(-3, 'd').endOf('day')},
    
    ]
});
