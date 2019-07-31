let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// saetParty
// removeParty

restaurant.seatParty(72)

console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)

console.log(restaurant.checkAvailability(4))



let parkingLot = {
    name: 'Parking Lot',
    spaceCapacity: 500,
    carCount: 0,
    freeSpace: function(space) {
        let spaceLeft = this.spaceCapacity - this.carCount
        return space <= spaceLeft
    },

    getCarsIn: function(cars) {
        this.carCount = this.carCount + cars
    },

    removeCars: function(cars) {
        this.carCount = this.carCount - cars
    }
}

parkingLot.getCarsIn(456)

parkingLot.removeCars(100)
console.log(parkingLot)
console.log(parkingLot.freeSpace(10))