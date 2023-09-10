import React, { Component } from "react";

class Addgoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: ''
    }
  }

  onNameAdd = (event) => {
    this.setState({ name: event.target.value })
  }

  onDescriptionAdd = (event) => {
    this.setState({ description: event.target.value })
  }

  onPriceAdd = (event) => {
    this.setState({ price: event.target.value })
  }

  onSubmitAdd = () => {
    fetch('http://localhost:3000/addgoods', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: this.state.description,
        price: this.state.price,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(goods => {
        if (goods.id) {
          this.props.loadgoods(goods);
          this.setState({ name: '', description: '', price: '' }); // Reset the input fields
        }
        console.log(goods)
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center">
        <main className="pa4 black-80">
          <div className="">
            <fieldset id="register" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Добавить новый товар</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black a w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameAdd}
                  value={this.state.name}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="description">Description</label>
                <input
                  className="pa2 w-100"
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.onDescriptionAdd}
                  value={this.state.description}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="price">Price</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="text"
                  name="price"
                  id="price"
                  onChange={this.onPriceAdd}
                  value={this.state.price}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitAdd}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Add Goods"
              />
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Addgoods;



// 1. Collecting datas
// 2. Saving datas in db
// 3. Showing new items in page shop