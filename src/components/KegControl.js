import React from "react";
import KegList from "./KegList";
import KegForm from "./KegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      showForm: false,
      selectedKeg: null
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ 
      masterKegList: newMasterKegList, 
      showForm: false 
    });
  }; //[]updating with a new keg, array of kegs

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        showForm: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        showForm: !prevState.showForm
      }));
    }
  }

  whenKegClicked = (id) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleSellButton = (updatedKeg) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(updatedKeg);
    this.setState({
        masterKegList: editedMasterKegList,
        selectedTicket: null
      });
  }

  handleDeleteButton = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(ticket => ticket.id !== id)
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentPage = <KegDetail keg={this.state.selectedKeg} handleSellButton={this.handleSellButton} handleDeleteButton = {this.handleDeleteButton}/>
      buttonText = "Return to Keg List"
    } else if (this.state.showForm) {
      currentPage = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Back"
    } else {
      currentPage = <KegList kegList={this.state.masterKegList} whenKegClicked = {this.whenKegClicked} />;
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
