import { Progress } from "@/components/ui/progress";
import familyImage from "@/assets/bruce-higgins-family.jpg";

const FundAllocation = () => {
  const allocations = [
    { category: "Immediate Family Expenses", amount: "$80,000", percentage: 40, description: "Housing, utilities, and daily living costs for Lori, Maddie, and Ryan" },
    { category: "Education Support", amount: "$50,000", percentage: 25, description: "College funds and educational expenses for Maddie and Ryan" },
    { category: "Medical & Final Expenses", amount: "$30,000", percentage: 15, description: "Outstanding medical bills and funeral costs" },
    { category: "Future Security", amount: "$40,000", percentage: 20, description: "Emergency fund and long-term financial stability for the family" }
  ];

  const totalAmount = "$200,000";

  return (
    <section id="funds" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Your Donation Helps
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Supporting the Higgins family in their time of need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {allocations.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{item.category}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-bold text-primary text-lg">{item.amount}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total Goal:</span>
                <span className="text-3xl font-bold text-primary">{totalAmount}</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img 
              src={familyImage} 
              alt="Bruce Higgins with his family"
              className="rounded-2xl shadow-elevated w-full"
            />
            <div className="mt-6 bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h3 className="font-bold text-foreground mb-3 text-center">Direct Family Support</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Every dollar donated goes directly to supporting Lori, Maddie, and Ryan Higgins. Your contribution helps ease the financial burden during this incredibly difficult time and ensures Bruce's family has the support they need for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundAllocation;
