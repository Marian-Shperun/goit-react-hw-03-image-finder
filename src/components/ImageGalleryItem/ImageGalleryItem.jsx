import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { ImageGalleryItemEl } from './ImageGalleryItem.syled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.item;
    return (
      <ImageGalleryItemEl>
        {this.state.showModal && (
          <Modal close={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <img onClick={this.toggleModal} src={webformatURL} alt={tags} />
      </ImageGalleryItemEl>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
