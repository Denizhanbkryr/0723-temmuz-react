import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import useInput from "../hooks/useInput";
import useLocalStorage from "../hooks/useLocalStorage";

const Header = () => {
  const [savedUserName, setSavedUserName] = useLocalStorage("user-name", "");
  const [userName, inputChangeHandler] = useInput("");

  const saveUserName = () => {
    setSavedUserName(userName);
  };

  const forgetAboutMe = () => {
    setSavedUserName("");
  };

  return (
    <header className="page-header">
      <h1>Sayfama hoş geldiniz {savedUserName}...</h1>
      {!savedUserName && (
        <div className="d-flex">
          <Input
            type="text"
            onChange={inputChangeHandler}
            placeholder="Lütfen isminizi giriniz..."
          />
          <Button onClick={saveUserName}>Kaydet</Button>
        </div>
      )}
      {savedUserName && <Button onClick={forgetAboutMe}>Beni unut!</Button>}
    </header>
  );
};

export default Header;
