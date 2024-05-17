const FAVORITE_CHARACTERS_KEY = "FAVORITE_CHARACTERS_KEY";

export default abstract class db {
  public static getFavoriteCharacters() {
    const savedState = localStorage.getItem(FAVORITE_CHARACTERS_KEY);

    return (
      savedState === "" || savedState === null ? [] : JSON.parse(savedState)
    ) as number[];
  }

  public static isFavorite(id: number) {
    const favoriteCharacters = this.getFavoriteCharacters();
    return favoriteCharacters.includes(id);
  }

  public static toggleFavoriteCharacter(id: number) {
    const favoriteCharacters = this.getFavoriteCharacters();
    if (this.isFavorite(id)) {
      favoriteCharacters.splice(favoriteCharacters.indexOf(id), 1);
    } else {
      favoriteCharacters.push(id);
    }

    localStorage.setItem(
      FAVORITE_CHARACTERS_KEY,
      JSON.stringify(favoriteCharacters),
    );
  }
}
