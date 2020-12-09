'use strict';

import React, { useState, useEffect, forwardRef } from 'react';

const withSearcher = (WrappedComponent) => forwardRef(({
      isLinkVisible,
      initialData,
      setArtistAndAlbum
}, ref) => {
      const defaultText = 'Find album...';
      const [text, setText] = useState(defaultText);
      const [isComponentVisible, setIsComponentVisible] = useState(false);
      const [foundedData, setFoundedData] = useState([]);
      const { initialData: initial } = initialData;

      function textInputHandler(text) {
            if (text === '') setText('\u2502');
            else setText(text + '\u2502');
            const filteredData = initial?.filter(({ name }) => name.indexOf(text) > 0);
            const foundedData = filteredData
                  .map((item) => ({ album: item?.name || '', artistName: item?.artist?.name }))
            setFoundedData(foundedData);
            if (foundedData.length > 0) setIsComponentVisible(true);
      }

      function handleClickOutside(event) {
            if (!ref?.current.contains(event.target)) {
                  setIsComponentVisible(false);
                  setText(defaultText);
            }
      }

      useEffect(() => {
            window.addEventListener('mousedown', handleClickOutside, true);
            return () => {
                  window.removeEventListener('mousedown', handleClickOutside, true);
            };
      }, []);

      function choosedListItem(obj) {
            setArtistAndAlbum(obj);
            setIsComponentVisible(false);
      }

      function onClickInputHdr({ event, inputRef }) {
            setText('');
            if (inputRef?.current.contains(event.target)) {
                  setText('\u2502');
            }
      }

      return (
            <WrappedComponent
                  text={text}
                  setText={textInputHandler}
                  isVisible={!isLinkVisible}
                  setFoundedData={foundedData}
                  forwardRef={ref}
                  isComponentVisible={isComponentVisible}
                  choosedListItem={choosedListItem}
                  onClickInputHdr={onClickInputHdr}
            />
      )
});

export default withSearcher;
