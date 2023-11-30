const  Images =
    {
    player: new Image(),
    enemy: new Image(),
    };

const AudioFile =
    {
        jump: "..",
        collect: "...",
    };

Images.player.src = "../resources/player.png";
Images.enemy.src = "../resources/enemy.png";

export {Images, AudioFile};
