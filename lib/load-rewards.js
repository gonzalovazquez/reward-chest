export async function loadRewards() {
  const url = 'https://api.notion.com/v1/databases/6e57d18c2276424a94b6e2898d4cfc69/query';
  const finalObject = []
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION}`,
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  // Manipulate reply from server-side
  for(let x=0; x<data.results.length; x++) {
    finalObject.push({
        'Unlocked': data.results[x].properties['Unlocked'].rich_text[0].text['content'] === 'No' ? false : true,
        'Current Cost': data.results[x].properties['Current Cost'].rich_text[0].text['content'],
        'Lowest Price': data.results[x].properties['Lowest Price'].rich_text[0].text['content'],
        'Image': data.results[x].properties['Image'].rich_text[0].text['content'],
        'Name':  data.results[x].properties['Name'].title[0].text.content,
        'Link': data.results[x].properties['Link'].rich_text[0].text['content'],
        'Energy Level': data.results[x].properties['Energy Level'].number,
    }) 
  }
  return finalObject;
}