export default function PanelD({name, salary, skills}: any) {
  return (
    <div className="panelD">
      Hello from PanelD component, 
      employee <b>{name}</b> earns <b>&pound;{salary}</b> and has these skills:
      <ul>
        {skills.map((skill: string, i: number) =>
          <li key={i}>{skill}</li>
        )}
      </ul>
    </div>
  );
}