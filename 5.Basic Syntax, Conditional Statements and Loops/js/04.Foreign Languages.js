function ForeignLanguages(lang) {
  switch (lang) {
    case `USA`:
    case `England`: console.log(`English`);
      break;
  
    case `Spain`:
    case `Argentina`:
    case `Mexico`: console.log(`Spanish`);
      break;

    default: console.log(`unknown`);
      break;
  }
}

ForeignLanguages(`USA`);
ForeignLanguages(`England`);

ForeignLanguages(`Spain`);
ForeignLanguages(`Argentina`);
ForeignLanguages(`Mexico`);

ForeignLanguages(`Ukraine`);
ForeignLanguages(`Bulgaria`);
