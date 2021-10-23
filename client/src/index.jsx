import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getUpdate = this.getUpdate.bind(this)
  }

  search (term) {

    $.ajax({
      method: 'post',
      url: '/repos',
      data: {'username': term},
      success: (data) => {
      console.log('Data is ', data)},
      error: () => console.log('Yo this search did not work')
    })
    console.log(`${term} was searched`);

  }

  getUpdate() {
    $.ajax({
      method: 'get',
      url: '/repos',
      success: (data) => {
      console.log('Data is ', data)
      this.setState({
        repos: [...this.state.repos, ...data]
      })},
      error: (error) => console.log('Yo this get did not work', error)
    })
  }

  componentDidMount() {
    this.getUpdate()
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));