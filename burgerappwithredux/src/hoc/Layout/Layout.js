import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux';
import { connect } from 'react-redux';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render(){
        return(
    <Aux>
        <Toolbar 
        isAuth={this.props.isAuthenticated}
        openSideBar={this.sideDrawerOpenHandler} drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        isAuth={this.props.isAuthenticated}
        open={this.state.showSideDrawer}
        closed={this.sideDrawerCloseHandler} />
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={classes.Layout}>
            {this.props.children}
        </main>
    </Aux>
        )
    }
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}
export default connect(mapStateToProps)(Layout);