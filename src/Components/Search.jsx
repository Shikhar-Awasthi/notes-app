import React, { useContext } from "react";
import { MdLanguage, MdSearch } from "react-icons/md";
import NoteContext from "../NoteContext";
import { useTranslation } from "react-i18next";

function Search() {
  const search = useContext(NoteContext);
  const { t, i18n } = useTranslation();
  const changeLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  return (
    <div className="search-container">
      <div className="search">
        <div>
          <MdLanguage size="1.3rem" color="#fff" onClick={changeLanguage} />
        </div>
        <div>
          <MdSearch size="1.3rem" color="#fff" />
        </div>
        <div>
          <input type="text" value={search.search} onChange={(e) => search.setSearch(e.target.value)} placeholder={t("search")} />
        </div>
      </div>
    </div>
  );
}

export default Search;
