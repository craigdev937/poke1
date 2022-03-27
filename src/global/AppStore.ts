import { makeAutoObservable } from "mobx";

export const AppStore = () => {
    makeAutoObservable({
        searchQuery: "",
        scrollPositionY: 0,
        handleSearchQueryChange(value: string) {
            this.searchQuery = value;
        },
        handleScrollPositionChange(value: number) {
            this.scrollPositionY = value;
        },
    });
};



