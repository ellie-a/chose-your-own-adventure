import { Path } from './path.model';
import { Choice } from './choice.model';

const START: number = 1;
const AWAKENINTUB: number = 2;
const EXAMINEROOM: number = 3;
const TALKTOPERSON: number = 4;
const TRYTOESCAPE: number = 5;
const PLAYTAPE: number = 6;
const PLAYTAPETWO: number = 7;
const ESCAPE: number = 8;
const ESCAPEALONE: number = 9;
//const EXAMINETILE: number = 10;
const TANKLID: number = 11;
const MURKYWATER: number = 12;
const TOILET: number = 13;

export const PATHS: Path[] = [
  new Path (
    //Path Id
    START,
    //Path description
    "Wanna play a game?",
    //Path choices
    [
      new Choice("Yes", AWAKENINTUB),
      new Choice("No", START)
    ]),
  new Path(AWAKENINTUB, "You awaken in a bathtub in a large dilapidated bathroom, and find yourself chained at the ankle to a pipe. A person is similarly shackled across the room. What do you do? ", [
    new Choice("Examine your surrondings", EXAMINEROOM),
    new Choice("Talk to the person across from you", TALKTOPERSON)
  ]),
  new Path(EXAMINEROOM, "Looking around the room you horrifically discover a corpse holding a revolver and a microcassette recorder with a tape inside. ", [
    new Choice("Talk to the person across from you", TALKTOPERSON),
    new Choice("Try to escape", TRYTOESCAPE)
  ]),

  new Path(TALKTOPERSON, "You get the attention of the person accross from you. They start to question: 'WHO ARE YOU?!' ", [
    new Choice("Calmy explain the situation", PLAYTAPE),
    new Choice("Yell back at them", TRYTOESCAPE)
  ]),

  new Path(PLAYTAPE, "After you have explained that you two are captives under the Jigsaw Killer, you ask 'Do you think you can reach the recorder?' Because you calmy spoke to him, he willingly attempts to grab the recorder. After some struggle he successfully retrieves the recorder ", [
    new Choice("Listen to the tape recorder", PLAYTAPETWO)
  ]),

  new Path(TRYTOESCAPE, "You thrash and struggle to free your ankle from the chain, but nothing happens. Your ankle stings. You notice that the toilet near you appears to have been out of order for years, but is almost overflowing, as though something broke the pump in the tank.", [
    new Choice("Continue to struggle", TRYTOESCAPE),
    new Choice("Examine the toilet", TOILET)
  ]),

  new Path(PLAYTAPETWO, "A raspy voice crackles from the handheld recorder. '... Hello ... I would like to play a game. ... You will both find yourself in a slight predicament. You can work together to try and escape, but one of you might flush away the other...'", [
    new Choice("Examine toilet", TOILET),
    new Choice("Try and escape alone", TOILET)
  ]),

  new Path(TOILET, "You examine the toilet near you. You see something shiny in the bowl, but you suspect that something might be hidden in the tank.", [
    new Choice("Open the tank lid", TANKLID),
    new Choice("Reach into the murky bowl water", MURKYWATER)
  ]),

  new Path(TANKLID, "You remove the lid of the tank and see a key attached to a heavy brick blocking the pump. You remove the brick from the tank to use the key on your bindings, and the toilet pump activates now that it is no longer obstructed. The toilet flushes and a glimpse of a key catches your eye as it disappears into the U-bend. You may have sealed someone's fate. You run over to the door and try the key on the door, but it does not fit. Horror wells up within you and you feel faint. You black out as you realize your only chance to escape might have been lost forever.", [
    new Choice("GAME OVER", START)
  ]),

  new Path(MURKYWATER, "You reach into the bowl and retrieve a key with a peculiar shape. It doesn't appear to fit the chain binding your ankle, but it might help the person across from you. You tell them what you found and he begs for the key. He promises to help you escape once he is free. You toss him the key. After he frees himself, he helps you escape from your bindings and you try the door to the room you are trapped in. It is locked from the inside, but the key you retrieved from the bowl also fits the lock of the door perfectly. You two live happily ever after.", [
    new Choice("YOU WIN", START)
  ])
];


// and between them is a corpse holding a revolver and a microcassette recorder.
