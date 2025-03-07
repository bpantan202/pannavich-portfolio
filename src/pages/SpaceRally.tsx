import { FC } from "react";

import imgA from "/img/space/A.png";
import imgB from "/img/space/B.png";
import imgC from "/img/space/C.png";
import imgD from "/img/space/D.png";
import imgE from "/img/space/E.png";
import gitLogo from "/img/github-mark.svg";

const SpaceRally: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1>Space-Rally: Mini Game</h1>
        <hr className="mt-5" />
      </div>
      <h2 className="flex">
        <div className="font-bold mr-1">Tools:</div>
        Java
      </h2>
      <div>
        SpaceRally is the 4-player game that immerses you in the role of an
        astronaut navigating the vastness of space, traversing multiple planets
        to earn points and conquer challenges. The aim of the game is to
        accumulate the highest score possible.
      </div>
      <div>
        <div className="font-bold mr-1">Rules</div>
        <span className="block mb-4" />
        - On each player's turn. The player has to roll the dice, Number of
        walks will be followed by the dice.
        <span className="block mb-4" />
        - During walking, the player can’t walk back to previously visited
        blocks.The player can visit the planet only on the last walk each turn
        and earn scores.The different planets have different scores.
        <span className="block mb-4" />
        - This game has the mission card that spawned only one card around the
        space.The mission card is the planet name.If you visit the planet
        followed by the mission card, you will earn more scores.
        <span className="block mb-4" />
        - The key that spawned around the space is an item that the player uses
        to open the extradoor. If the player hasn't enough key to open the
        extradoor, the player can’t walk through the extradoor.
        <span className="block mb-4" />- This game has 10 turns. After the final
        turn, The winner is the player with the highest score.
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Game Page</div>
        <div>
          <img src={imgC} className="w-full object-contain" />
        </div>
        <div className="flex flex-col gap-5 pt-5 md:flex-row md:gap-0">
          <img src={imgB} className="w-full md:w-1/3 object-contain md:pr-2" />
          <img
            src={imgD}
            className="w-full md:w-1/3 object-contain md:pr-1 md:pl-1"
          />
          <img src={imgE} className="w-full md:w-1/3 object-contain md:pl-2" />
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Title screen`</div>
        <img src={imgA} className="w-full object-contain" />
      </div>

      <div>
        <a
          href="https://github.com/bpantan202/Space-Rally.git"
          target="_blank"
          className="flex flex-row items-center gap-1.5"
        >
          <img src={gitLogo} alt="Git logo" className="w-5 object-contain" />
          <div className="font-semibold text-sm underline underline-offset-1">
            https://github.com/bpantan202/Space-Rally.git
          </div>
        </a>
      </div>
    </div>
  );
};

export default SpaceRally;
