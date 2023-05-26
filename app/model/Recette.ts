export class Recette {
  id: number = 0;
  titre: string = '';
  photo: string = '';
  description: string = '';
  votes_positifs: number = 0;
  votes_negatifs: number = 0;
  detailsVisible: boolean;

  constructor(id: number, titre: string, photo: string, description: string) {
    this.id = id;
    this.titre = titre;
    this.photo = photo;
    this.description = description;
    this.detailsVisible = false;
  }
}
