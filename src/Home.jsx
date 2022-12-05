const Home=({setEquity, equities,addEquity,drawGraph})=>{
    return(
        <div className="selectionPortal">
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="Companies equity symbol" onChange={(e)=>setEquity(e.target.value)}/>
                <button onClick={addEquity}>add</button>
            </form>
            {equities.map((eachEquity)=>{
                return(
                    <div key={eachEquity}>
                        <h4 onClick={()=>drawGraph(eachEquity)}>{eachEquity}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;

