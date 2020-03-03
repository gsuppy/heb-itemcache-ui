import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import './search.css';

export interface SearchProps { }
export interface SearchState { query: string; }

export class Search extends React.Component<{}, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.getItem = this.getItem.bind(this);
        this.state = {query: ''};
    }

    getItem() {
        const apiBaseUrl = 'http://api';
        console.log("searching for " + this.state.query);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({query: e.target.value});
    }
    
    render() {
        const query = this.state.query;
        return (
            <div className="row">
                <div className="col-md-6">
                    <InputGroup>
                        <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={query}
                        onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.getItem}>Go</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="col-md-6">
                    <Button variant="outline-secondary">
                    <i className="fa fa-car"></i>
                    Shop Curbside
                    </Button>
                    <Button variant="outline-secondary">
                    <i className="fa fa-home"></i>
                    Shop Delivery
                    </Button>
                    <Button bsPrefix="btn heb-button cart">
                    <i className="fa fa-shopping-cart"></i>
                    $0.00
                    </Button>
                </div>
            </div>
        );
    }
}

export default Search;
