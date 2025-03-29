function enregistrerContact() {
    const nom = "Am2tech";
    const numeroTelephone = "06-52-80-51-05";

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



function partagerContact() {
    const nom = "Am2tech";
    const numeroTelephone = "06-52-80-51-05";
    const email = "Amin75013@hotmail.fr";

    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nom}\nTEL;TYPE=CELL:${numeroTelephone}\nEMAIL:${email}\nEND:VCARD`;
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const file = new File([blob], `${nom}.vcf`, { type: 'text/vcard' });

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
            files: [file],
            title: 'Partager contact',
            text: `Voici les coordonnées de ${nom}`
        }).then(() => {
            alert('Contact partagé avec succès.');
        }).catch((error) => {
            alert(`Erreur lors du partage du contact: ${error}`);
        });
    } else {
        alert("Votre appareil ou navigateur ne supporte pas le partage de contacts.");
    }
}
