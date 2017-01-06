function Bonus_taken(type, FC_beginning) {
    this.type = type;
    this.timing = 600;
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
}