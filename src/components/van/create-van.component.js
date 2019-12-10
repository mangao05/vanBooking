import React, { Component } from 'react';
import axios from 'axios';
import { throws } from 'assert';
import { isThisMonth } from 'date-fns';

export default class CreateVan extends Component {
  constructor(props) {
    super(props);

    this.onChangeVanName = this.onChangeVanName.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeVanBody = this.onChangeVanBody.bind(this);
    this.onChangeTransmission = this.onChangeTransmission.bind(this);
    this.onChangeSeats = this.onChangeSeats.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
      vanName: '',
      year: '',
      vanBody: '',
      transmission: '',
      seats: '',
      category: '',
      stock: '',
      categories: []
    }
  }

  componentDidMount(){
      axios.get('http://localhost:5000/vans/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data.map(category => category.category),
          })
          
        }
        console.log(response)

      })
  }

    onChangeVanName(e){
      this.setState({
          vanName: e.target.value
      })
    }
    onChangeYear(e){
      this.setState({
          year: e.target.value
      })
    }
    onChangeVanBody(e){
        this.setState({
          vanBody: e.target.value
        })
    }
    onChangeTransmission(e){
        this.setState({
            transmission: e.target.value
        })
    }
    onChangeSeats(e){
        this.setState({
            seats: e.target.value
        })
    }
    onChangeCategory(e){
        this.setState({
            category: e.target.value
        })
    }
    onChangeStock(e){
        this.setState({
            stock: e.target.value
        })
    }

    categoryModal(){
        alert(123123)
    }
  onSubmit(e) {
    e.preventDefault();

    const van = {
        vanName: this.state.vanName,
        year: this.state.year,
        vanBody: this.state.vanBody,
        transmission: this.state.transmission,
        seats: this.state.seats,
        category: this.state.category,
        stock: this.state.stock
    }

    console.log(van);

    axios.post('http://localhost:5000/vans/add', van)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create Van</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name of Van: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vanName}
              onChange={this.onChangeVanName}
              />
        </div>
        <div className="form-group"> 
          <label>Year: </label>
          <input type="date"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
        </div>
        <div className="form-group"> 
          <label>Van Body Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vanBody}
              onChange={this.onChangeVanBody}
              />
        </div>
        <div className="form-group"> 
          <label>Transmission: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.transmission}
              onChange={this.onChangetransmission}
              />
        </div>
        <div className="form-group"> 
          <label>Name of Seats: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.seats}
              onChange={this.onChangeSeats}
              />
        </div>
        <div className="form-group"> 
          <label>Category: </label>
          <select
              required
              className="form-control"
              onChange={this.onChangeCategory}>
                  <option>Select Category</option>
              {
                this.state.categories.map(function(category) {
                  return <option 
                    key={category} 
                    value={category}>{category}
                    </option>;
                })
              }
              <option value="openmodal" onClick={this.categoryModal}>
                    Add Category
                </option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Create" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}