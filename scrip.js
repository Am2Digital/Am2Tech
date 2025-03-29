function enregistrerContact(nom, numeroTelephone) {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nom}\nTEL;TYPE=CELL:${numeroTelephone}\nEND:VCARD`;
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nom}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Le fichier contact a été téléchargé. Ouvre-le pour l'ajouter à tes contacts.");
}

// Appel direct :
enregistrerContact("Am2tech", "06.52.80.51.05");

async function partagerContact() {
    if (navigator.share) {
      try {
        const file = new File([vCard], `${prenom}_${nom}.vcf`, { type: 'text/vcard;charset=utf-8' });
        await navigator.share({
          title: 'Partager Contact',
          text: 'Voici les informations du contact :',
          files: [file]
        });
      } catch (error) {
        alert('Erreur lors du partage : ' + error);
      }
    } else {
      alert("Votre navigateur ne supporte pas le partage de fichiers.");
    }
  }

