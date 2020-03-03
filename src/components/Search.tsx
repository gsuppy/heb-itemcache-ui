import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../styles/Search.css';
import Queries from './Queries';
import Cache from './Cache';

export interface SearchProps { }
export interface SearchState { query: string; queries: Array<string>; } 

export class Search extends React.Component<{}, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {query: '', queries: []};
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({query: e.target.value});
    }

    handleSubmit() {
        const apiBaseUrl = 'http://api';
        console.log("searching for " + this.state.query);
        // must be a unique query
        if(!this.state.queries.includes(this.state.query)){
            this.state.queries.push(this.state.query);
            this.setState({query: ''});
        }
    }
    
    render() {
        const query = this.state.query;
        return (
            <div className="spacer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <InputGroup>
                                <FormControl
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={query}
                                onChange={this.handleChange}
                                onKeyPress={(event: { key: string; }) => {
                                    if (event.key === "Enter") {
                                        if(query != '') this.handleSubmit();
                                    }
                                }}
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleSubmit}>Go</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div className="col-md-5">
                            <Button className="mr-btn" variant="outline-secondary">
                            <i className="fa fa-car mr"></i>
                            Shop Curbside
                            </Button>
                            <Button className="mr-btn" variant="outline-secondary">
                            <i className="fa fa-home mr"></i>
                            Shop Delivery
                            </Button>
                            <button type="button" className="btn btn-danger cart">
                                <i className="fa fa-shopping-cart mr"></i>
                                $0.00
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="spacer row">
                        <Cache cached={this.state.queries}></Cache>
                        <Queries></Queries>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;