let Nokia = new Mobile("Nokia");
let iPhone = new Mobile("iPhone");

Nokia.powerOn();
Nokia.composeMessage("Hello iPhone!");
Nokia.sendMessage(iPhone);

iPhone.powerOn();
console.log(iPhone.checkInbox());