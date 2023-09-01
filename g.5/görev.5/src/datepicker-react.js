$('.datepicker').datepicker({
    minDate: new Date(),
    onSelect: function(formattedDate, date, inst) {
        console.log(formattedDate, date, inst);
    }
});