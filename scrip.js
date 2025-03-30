// function enregistrerContact() {
//     const nom = "Am2tech";
//     const numeroTelephone = "06-52-80-51-05";

//     const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nom}\nTEL;TYPE=CELL:${numeroTelephone}\nEND:VCARD`;
//     const blob = new Blob([vCard], { type: 'text/vcard' });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${nom}.vcf`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);

//     alert("Le fichier contact a été téléchargé. Ouvre-le pour l'ajouter à tes contacts.");
// }
// // Appel direct :
// enregistrerContact("Am2tech", "06.52.80.51.05");



// function partagerContact() {
//     const nom = "Am2tech";
//     const numeroTelephone = "06-52-80-51-05";
//     const email = "Amin75013@hotmail.fr";

//     const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nom}\nTEL;TYPE=CELL:${numeroTelephone}\nEMAIL:${email}\nEND:VCARD`;
//     const blob = new Blob([vCard], { type: 'text/vcard' });
//     const file = new File([blob], `${nom}.vcf`, { type: 'text/vcard' });

//     if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
//         navigator.share({
//             files: [file],
//             title: 'Partager contact',
//             text: `Voici les coordonnées de ${nom}`
//         }).then(() => {
//             alert('Contact partagé avec succès.');
//         }).catch((error) => {
//             alert(`Erreur lors du partage du contact: ${error}`);
//         });
//     } else {
//         alert("Votre appareil ou navigateur ne supporte pas le partage de contacts.");
//     }
// }


//FANCTION ENREGISTRE ET ENVOYER //


    function saveContact() {
      const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Am2Tech
TEL;TYPE=CELL:0652805105
END:VCARD
      `.trim();

      const blob = new Blob([vCardData], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Am2Tech.vcf';
      a.click();

      URL.revokeObjectURL(url);
    }

    function shareContact() {
      if (navigator.share) {
        navigator.share({
          title: 'Am2Tech',
          text: 'Voici le contact de Am2Tech : 0652805105',
        })
        .catch(err => console.error('Erreur :', err));
      } else {
        alert("Le partage n'est pas supporté sur ce téléphone. Tu peux sauvegarder le contact à la place !");
      }
    }
  





    





    

    //FONCTION CHATBOT//


  //   const chat = document.getElementById('chat');
  // const input = document.getElementById('user-input');

  // let step = 0;
  // const answers = {};

  // const botReply = (text) => {
  //   const msg = document.createElement('div');
  //   msg.className = 'message bot';
  //   msg.textContent = text;
  //   chat.appendChild(msg);
  //   chat.scrollTop = chat.scrollHeight;
  // };

  // const userReply = (text) => {
  //   const msg = document.createElement('div');
  //   msg.className = 'message user';
  //   msg.textContent = text;
  //   chat.appendChild(msg);
  //   chat.scrollTop = chat.scrollHeight;
  // };

  // input.addEventListener('keypress', function(e) {
  //   if (e.key === 'Enter') {
  //     const userText = input.value.trim();
  //     if (!userText) return;
  //     userReply(userText);
  //     input.value = '';

  //     switch (step) {
  //       case 0:
  //         if (/oui/i.test(userText)) {
  //           botReply("Parfait ! Est-ce votre première visite ? (Oui / Non)");
  //           step++;
  //         } else {
  //           botReply("D'accord, n'hésitez pas à nous contacter si besoin. Bonne journée !");
  //           step = 99;
  //         }
  //         break;
  //       case 1:
  //         answers.firstTime = userText;
  //         botReply("Quel est le motif du rendez-vous ? (Contrôle, Urgence, Détartrage, etc.)");
  //         step++;
  //         break;
  //       case 2:
  //         answers.reason = userText;
  //         botReply("Avez-vous une préférence de jour ou d'horaire ?");
  //         step++;
  //         break;
  //       case 3:
  //         answers.preference = userText;
  //         botReply("Voici nos disponibilités :\n- Lundi à 10h\n- Mercredi à 14h\n- Vendredi à 9h\nQuel créneau souhaitez-vous ?");
  //         step++;
  //         break;
  //       case 4:
  //         answers.timeSlot = userText;
  //         botReply(`Votre rendez-vous est confirmé pour ${userText} ✔️`);
  //         botReply("Merci ! N'oubliez pas votre carte Vitale et votre carte de mutuelle. À bientôt !");
  //         step = 99;
  //         break;
  //       default:
  //         botReply("Merci pour votre visite !");
  //     }
  //   }
  // });




  
