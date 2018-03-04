import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

//const source = (() => ([{title: "a"}, {title: "b"}]))()
export default class SearchExampleStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: []
    };
  }
  componentWillMount() {
    this.resetComponent()
  }
  componentDidMount() {
    fetch("/chain").then(res => res.json()).then(res => {this.setState({source: res.chain.filter((b) => b.index != 1).map((b) => ({title: b.transactions[0].building_name}))})})}
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState((prevState) => ({
        isLoading: false,
        results: _.filter(prevState.source, isMatch),
      }))
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
          {...this.props}
        />
    )
  }
}
