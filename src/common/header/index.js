import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle
} from './style'

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : '' }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont' }>&#xe614;</i>
            <SearchInfo>
              <SearchInfoTitle>

              </SearchInfoTitle>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button> 
        </Addition>
      </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)