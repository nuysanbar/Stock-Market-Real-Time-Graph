
const Graph=({svgVariable, color})=>{
    return (
        <div className='graph'>
        <svg height="510" width="800" >
            <path d={svgVariable} fill='none' stroke="white" />
            <text x="0" y="30" fill="green">480</text>
            <path d="M0 30 L0 30 L800 30 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="60" fill="green">450</text>
            <path d="M0 60 L0 60 L800 60 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="90" fill="green">420</text>
            <path d="M0 90 L0 90 L800 90 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="120" fill="green">390</text>
            <path d="M0 120 L0 120 L800 120 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="150" fill="green">360</text>
            <path d="M0 150 L0 150 L800 150 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="180" fill="green">330</text>
            <path d="M0 180 L0 180 L800 180 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="210" fill="green">300</text>
            <path d="M0 210 L0 210 L800 210 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="240" fill="green">270</text>
            <path d="M0 240 L0 240 L800 240 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="270" fill="green">240</text>
            <path d="M0 270 L0 270 L800 270 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="300" fill="green">210</text>
            <path d="M0 300 L0 300 L800 300 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="330" fill="green">180</text>
            <path d="M0 330 L0 330 L800 330 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="360" fill="green">150</text>
            <path d="M0 360 L0 360 L800 360 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="390" fill="green">120</text>
            <path d="M0 390 L0 390 L800 390 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="420" fill="green">90</text>
            <path d="M0 420 L0 420 L800 420 " stroke="white" strokeWidth={0.2} fill="none"/>
            <text x="0" y="450" fill="green">60</text>
            <path d="M0 450 L0 450 L800 450 " stroke="white" strokeWidth={0.1} fill="none"/>
            <text x="0" y="480" fill="green">30</text>
            <path d="M0 480 L0 480 L800 480 " stroke="white" strokeWidth={0.1} fill="none"/>
            <text x="0" y="510" fill="green">0</text>
            <path d="M0 510 L0 510 L800 510 " stroke="white" strokeWidth={0.1} fill="none"/>
         </svg>
         </div>
    )
}
export default Graph;