# meter_metric.py

class MeterMetric:
    """Przelicza stopy na metry."""

    def create_meter(self, feet: float) -> float:
        """Stopy -> metry (1 ft = 0.3048 m)."""
        return feet * 0.3048
