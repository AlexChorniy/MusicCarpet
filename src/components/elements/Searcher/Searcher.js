'use strict';
import React, {useRef} from 'react';
import { Container, ShowInf, List, ListItem } from './SearcherStyles';
import Imput from '../Input';
import { uuid } from '../../../utils/helpers';
import { Text } from '../../commonStyles';

const TextInput = ({
  text,
  setText,
  isVisible,
  setFoundedData = [],
  forwardRef,
  isComponentVisible,
  choosedListItem,
  onClickInputHdr,
}) => {

  const isData = !!setFoundedData.length;
  const dataInf = isData && setFoundedData || [];
  const inputRef = useRef();

  const LiElements = dataInf.map((item) =>
    <ListItem
      key={uuid()}
      onClick={() => choosedListItem({ album: item.album, artistName: item.artistName})}
    >
      <Text
        tAlign="justify"
        fSize="12px"
        tOverflow="ellipsis"
        wSpace="nowrap"
        overflow="hidden"
        width="80%"
      >{item.album}</Text>
      <Text
        mLeft="10px"
        tAlign="justify"
        fSize="12px"
        tOverflow="ellipsis"
        wSpace="nowrap"
        overflow="hidden"
        width="20%"
      >
        {item.artistName}
      </Text>
    </ListItem>
  )
  return (
    <Container>
      <Imput
        isVisible={isVisible}
        text={text}
        onChangeHandler={(e) => setText(e.target.value)}
        onClickInputHdr={(e) => onClickInputHdr({event: e, inputRef})}
        ref={inputRef}
      />
      <ShowInf display={isComponentVisible ? 'block' : 'none'}>
        <List ref={forwardRef}>
          {LiElements}
        </List>
      </ShowInf>
    </Container>
  )
};

export default TextInput;
