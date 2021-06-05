import React, { Component } from "react";
import Instagram from "./../lib/Instagram";
import InstagramEmbed from "react-instagram-embed";

class Feed extends Component {
  static defaultProps = {
    getFeedFn: Instagram.getFeed,
    limit: 12,
    hideCaption: false,
    maxWidth: "",
    protocol: "",
    maxContainerHeight: 510,
    injectScript: true,
  };

  constructor(props) {
    super(props);

    this.state = { media: [] };
  }

  componentDidMount() {
    this.props
      .getFeedFn(this.props.userName)
      .then((media) =>
        this.setState({
          loading: false,
          media: media.slice(0, this.props.limit),
        })
      )
      .catch((error) => this.setState({ error }));
  }

  render() {
    if (this.props.userName === undefined)
      return <h4>username is undefined</h4>;
    if (this.props.clientAccessToken === undefined)
      return <h4>clientAccessToken is undefined</h4>;
    return (
      <div
        style={{
          overflowY: "auto",
          margin: "auto",
          padding: "1%",
          minWidth: "380px",
          maxHeight: `${this.props.maxContainerHeight}px`,
          maxWidth: `${this.props.maxWidth + 60}px`,
        }}
      >
        {this.state.media.map((media, index) => (
          <InstagramEmbed
            alt={media.alt}
            key={index}
            url={media.url}
            clientAccessToken={this.props.clientAccessToken}
            maxWidth={this.props.width}
            hideCaption={this.props.hideCaption}
            containerTagName="div"
            protocol={this.props.protocol}
            injectScript={this.props.injectScript}
            // onLoading={() => {}} // * Maybe Later
            // onSuccess={() => {}}
            // onAfterRender={() => {}}
            // onFailure={() => {}}
          />
        ))}
      </div>
    );
  }
}

export default Feed;
