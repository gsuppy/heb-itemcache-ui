import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../styles/Search.css';
import Queries from './Queries';
import Cache from './Cache';

export interface SearchProps { }
export interface SearchState { query: string; queries: Array<string>; timestamp: Array<string>; } 

export function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    
    return `${month<10?`${month}`:`${month}`}${separator}${date}${separator}${year} at ${hour}:${minute}:${seconds}`
}

export class Search extends React.Component<{}, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {query: '', queries: [''], timestamp: ['']};
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({query: e.target.value});
    }

    handleSubmit() {
        const apiBaseUrl = 'http://istio-ingress-gateway.istio-system.svc.local';
        console.log("searching for " + this.state.query);
        // must be a unique query
        if (!this.state.queries.includes(this.state.query)) {
            this.state.queries.push(this.state.query);
            this.state.timestamp.push(getCurrentDate());
            this.setState({query: ''});           
        };
    }
    
    render() {
        const query = this.state.query;
        return (
            <div className="spacer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <InputGroup>
                              <FormControl placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" value={query} onChange={this.handleChange} onKeyPress={(event: { key: string; })=> { if (event.key === "Enter") { if(query != '') this.handleSubmit(); } }} />
                                  <InputGroup.Append>
                                      <Button variant="dark" onClick={this.handleSubmit}><i className="fa fa-search"></i></Button>
                                  </InputGroup.Append>
                          </InputGroup>
                      </div>
                      <div className="col-md-6">
                          <Button className="mr-btn" variant="light">
                              <span className="btn-txt">
                                          <i className="fa-icon fa fa-car mr"></i>
                                          Shop Curbside
                                      </span>
                          </Button>
                          <Button className="mr-btn" variant="light">
                              <span className="btn-txt">
                                          <i className="fa-icon fa fa-home mr"></i>
                                          Shop Delivery
                                      </span>
                          </Button>
                          <button type="button" className="btn btn-danger cart">
                              <i className="fa fa-shopping-cart mr"></i> $0.00
                          </button>
                      </div>
                  </div>
              </div>
              <div className="container-fluid">
                  <div className="spacer row">
                      <div className="col-md-4">
                        <Cache cached={this.state.queries} timestamp={this.state.timestamp}></Cache>
                      </div>
                      <div className="col-md-8">
                        <Queries></Queries>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Search;
