// 📁 src/utils/LocalStorageManager.js

/**
 * Classe utilitaire pour gérer le stockage local (localStorage)
 * Permet de sauvegarder, lire, modifier et supprimer les données utilisateur
 */
class LocalStorageManager {
  /**
   * Sauvegarde une donnée dans le localStorage
   * @param {string} key - Nom de la clé
   * @param {any} value - Valeur à enregistrer
   */
  static setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Erreur lors de l’enregistrement dans le localStorage :", error);
    }
  }

  /**
   * Récupère une donnée depuis le localStorage
   * @param {string} key - Nom de la clé
   * @returns {any|null} - La valeur correspondante ou null si non trouvée
   */
  static getItem(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Erreur lors de la lecture du localStorage :", error);
      return null;
    }
  }

  /**
   * Supprime une donnée spécifique du localStorage
   * @param {string} key - Nom de la clé
   */
  static removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  }

  /**
   * Efface complètement le localStorage
   */
  static clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Erreur lors du nettoyage du localStorage :", error);
    }
  }

  /**
   * Vérifie si une clé existe dans le localStorage
   * @param {string} key - Nom de la clé
   * @returns {boolean}
   */
  static hasKey(key) {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Liste toutes les clés stockées dans le localStorage
   * @returns {string[]} - Tableau contenant toutes les clés
   */
  static getAllKeys() {
    return Object.keys(localStorage);
  }

  /**
   * Récupère toutes les données du localStorage
   * @returns {object} - Un objet contenant toutes les paires clé/valeur
   */
  static getAllItems() {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      all[key] = this.getItem(key);
    }
    return all;
  }
}

export default LocalStorageManager;
