/*
 * Runtime 165 ms Beats 45.90%
 * Memory 61.18 MB Beats 19.67%
 */
class BrowserHistory { 
  private currentIndex: number;
  private history: string[] = [];
  constructor(homepage: string) {
      this.history.push(homepage);
        this.currentIndex = 0;
  }

  visit(url: string): void {
      if (this.currentIndex !== this.history.length-1) {
        this.history.splice(this.currentIndex+1, this.history.length-this.currentIndex-1)
      }
      this.history.push(url);
      this.currentIndex++;
  }

  back(steps: number): string {
      this.currentIndex = this.currentIndex-steps < 0 ? 0 : this.currentIndex-steps;
        return this.history[this.currentIndex];
  }

  forward(steps: number): string {
      this.currentIndex = this.currentIndex+steps > this.history.length-1 ? this.history.length-1 : this.currentIndex+steps;
        return this.history[this.currentIndex];
  }
}