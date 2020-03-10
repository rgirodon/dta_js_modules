class Player {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

export default Player;

