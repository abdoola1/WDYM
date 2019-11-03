export const Game_Server = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [
        {quote:"what do you meme"},
        {quote:"so it has come to this"},
        {quote:"i will slit your throat with a rusty turtle"},
        {quote:"i got some damsels to go distress"},
        {quote:"hang in there baby"},
        {quote:"your father is not a glass maker"},
        {quote:"quote"},

    ],
    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export const Game_Client = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 },
    ],
    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export var My_Captions = {

}

export class Player {
    name;
    points;
    captions;
}