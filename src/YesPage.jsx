function YesPage({onBack}){
    return(
        <div className="yes-page">
            <div className="yes-card">
                <img src="/cat-kiss.gif" alt="kiss"/>
                <p className="yes-text">I knew it!!!  🥰</p>
                <p className="yes-subtext">
                    You just made me the happiest person alive.
                </p>
                <button className="back-btn" onClick={onBack}>
                    Go back
                </button>
            </div>
        </div>
    );
}

export default YesPage;