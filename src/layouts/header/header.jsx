const Header = () => {
    return (
        <header className="header">
            <div className="header__col header__col_sidebar">
                <div className="header-actions">
                    <button className="header-actions__btn btn_goals"><img src="./img/icons/icon-goal.svg" alt="img"/></button>
                    <button className="header-actions__btn btn_finances"><img src="./img/icons/icon-wallet.svg" alt="img"/></button>
                    <button className="header-actions__btn btn_training"><img src="./img/icons/icon-gym.svg" alt="img"/></button>
                </div>
            </div>
            <div className="header__col header__col_middle">
                <div className="header-goals">
                    <button className="header-goals__btn btn_quartergoals">III Квартал 2024 - Цели</button>
                </div>
            </div>
            <div className="header__col header__col_sidebar">
                <div className="header-actions">
                    <button className="header-actions__btn btn_projects"><img src="./img/icons/icon-projects.svg" alt="img"/></button>
                    <button className="header-actions__btn btn_journal"><img src="./img/icons/icon-journal.svg" alt="img"/></button>
                    <button className="header-actions__btn btn_profile"><img src="./img/icons/icon-profile.svg" alt="img"/></button>
                </div>
            </div>
        </header>
    )
}

export default Header;