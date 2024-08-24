import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    console.log("[TwitterFollowCard] render with userName: ", userName);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button";

    const handleClick = () => {
        // invierta los valores
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="El avatar de midudev"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                {/* accion del boton */}
                <button className={buttonClassName} onClick={handleClick}>
                    {/* espara hacer que cuando se esta sigiiemdo ala persona 
                    se muestrea el dejar de segir */}
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
