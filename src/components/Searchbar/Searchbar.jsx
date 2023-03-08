import { Component } from 'react';
import { Header, Form, Button, Label, Input } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;

    if (!query.trim()) {
      return alert('Please, enter some data!');
    }

    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Button type="submit" style={{ marginRight: '10px' }}>
            <Label>
              <GoSearch />
              Search
            </Label>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </Form>
      </Header>
    );
  }
}
