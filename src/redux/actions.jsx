import axios from 'axios';

const apiUrl = 'https://api.myjson.online/v1/records/f301f2ee-5184-4f10-aaea-2be2c817b6d2';

export const ajouterAuPanier = (produit) => ({
    type: 'AJOUTER_AU_PANIER',
    payload: produit,
});


export const modifierQuantite = (id, quantite) => ({
    type: 'MODIFIER_QUANTITE',
    payload: { id, quantite },
});


export const supprimerDuPanier = (id) => ({
    type: 'SUPPRIMER_DU_PANIER',
    payload: { id },
});


export const viderPanier = () => ({
    type: 'VIDER_PANIER',
});



export const diminuerStock = (commandes) => ({
    type: 'DIMINUER_STOCK',
    payload: commandes,
});



export const appliquerFiltre = (filtre) => ({
    type: 'APPLIQUER_FILTRE',
    payload: filtre,
});


export const fetchProduits = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}`);
        dispatch({
            type: 'SET_PRODUITS',
            payload: response.data, 
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
};






