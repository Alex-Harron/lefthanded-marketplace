import React, {Component} from 'react';
import { addReview } from '../actions/ReviewActions';
import { connect } from 'react-redux';


class ReviewForm extends Component {
    state = {
        text: "",
        star_rating: "",
        item_id: this.props.route
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addReview(this.state)
        this.setState({
            text: '',
            star_rating: ''
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Review: </label>
                <input 
                    name="text"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                /><br/>
                <label>Score: </label>
                <input
                    name="star_rating"
                    type="number"
                    min="0" 
                    max="5"
                    value={this.state.star_rating}
                    onChange={this.handleChange}
                /><br/>
                <input type="submit" value="Post Review" />
            </form>
        )
    }
}

export default connect(null, {addReview})(ReviewForm);