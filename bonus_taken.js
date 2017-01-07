function Bonus_taken(type, mod_ropes, FC_beginning) {
    this.type = type;
    this.mod_ropes = mod_ropes;
    this.timing = 600;
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
}