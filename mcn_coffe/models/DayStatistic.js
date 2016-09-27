/**
 * Created by blood_000 on 2016-09-28.
 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var DayStatistic = new mongoose.Schema({
    menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
    year: Number,
    month: Number,
    date: Number,
    hour: Number,
    total_count: Number,
    total_cost: Number
},{
    timestamps: true
});

mongoose.model('DayStatistic', DayStatistic);