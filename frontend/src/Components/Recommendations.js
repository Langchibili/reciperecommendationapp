import React from "react";
import './Includes/Recommendations.css'

export default class Recommendations extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recommendations: [],
            loading: true
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:5000/scrape_recipes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.props.items),
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                recommendations: data,
                loading: false
            },()=>{
                console.log(this.state.recommendations); // Process the scraped recipes data
            })
       
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
    render(){
        const defaultImageURL = 'https://w7.pngwing.com/pngs/156/887/png-transparent-local-food-ottawa-computer-icons-restaurant-others-miscellaneous-food-company.png';
        return this.state.loading? <div className="col s8 pad-0 center"><h5 className="bot-20 sec-tit center">Recommendations Here</h5> <div className="loader"></div></div> : <div className="col s8 pad-0">
               <h5 className="bot-20 sec-tit center ">Recommendations Here</h5>
               <div className="recommendations-container">
                <div className="recipe-grid">
                    {this.state.recommendations.map((result, index) => (
                        <div key={index} className="recipe-card">
                             <img src={result.pagemap?.cse_image?.[0]?.src || defaultImageURL} alt={result.title} className="recipe-image" />
                            <div className="recipe-details">
                                <h3 className="recipe-title">{result.title}</h3>
                                <p className="recipe-source">Recipe Source Site: {result.displayLink}</p>
                                <p className="recipe-link">Recipe Link: <a href={result.link} target="_blank" rel="noopener noreferrer">{result.link}</a></p>
                                snippet:
                                <p className="recipe-snippet">{result.snippet}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
    }
}