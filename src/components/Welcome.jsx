import Card from "../components/Card";
import Button from "../components/Button";

export function Welcome({ content, onSelectRole }) {
  return (
    <div className="space-y-6">

      <Card>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {content.title}
        </h2>
        <p className="text-slate-600">
          {content.description}
        </p>
      </Card>

      <div className="space-y-4">
        {content.roles.map((role) => (
          <Button
            key={role.id}
            full
            onClick={() => onSelectRole(role.id)}
          >
            <div className="text-left">
              <div className="font-semibold">
                {role.title}
              </div>
              <div className="text-sm opacity-80">
                {role.description}
              </div>
            </div>
          </Button>
        ))}
      </div>

    </div>
  );
}
