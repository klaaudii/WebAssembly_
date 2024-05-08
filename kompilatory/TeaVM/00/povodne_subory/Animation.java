package diplomka.teavm.wasm;

//import org.teavm.interop.*;

import org.teavm.interop.DelegateTo;
import org.teavm.interop.Export;
import org.teavm.interop.Import;
import org.teavm.jso.JSBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Animation {

	static List<Ball> balls;
	@Export(name="main")
	public static void main(String[] args) {
		initBalls();
	}

	@Export(name = "opt")
	public int opt() {
		Ball ball = new Ball(0,0,10,0);
		ball.move();
		return ball.getX();
	}
	@Export(name = "obj")
	public Ball obj() {
		Ball ball = new Ball(0,0,10,0);
		ball.move();
		balls.add(ball);
		return ball;
	}


//	@Export(name = "add")
//	public int add(int a, int b) {
//		int result = a + b;
//		return result;
//	}

//	iba pre JS backend
//	@JSBody(params = { "message" }, script = "console.log(message)")
//	public static native void log(String message);

	@Export(name = "initBalls")
	public static void initBalls() {
		Random rnd = new Random();
		balls = new ArrayList<>();
		for (int i = 0; i < 1000; i++){
			balls.add(new Ball(rnd.nextInt(512),rnd.nextInt(512),
					rnd.nextBoolean() ? 1 : -1, rnd.nextBoolean() ? 1 : -1));
		}
	}


	@Export(name = "moveBalls")
	public void moveBalls() {
		for (int i = 0; i < balls.size(); i++) {
			balls.get(i).move();
		}
	}

	@Export(name = "solveCollision")
	public void solveCollision() {
		for (int i = 0; i < balls.size(); i++) {
			for (int j = 0; j < balls.size(); j++){
				if (i == j) {
					continue;
				}
				balls.get(i).solveCollision(balls.get(j));
			}
		}
	}

	@Import(module = "teavm", name = "drawBall")
	private static native void drawBall(int x, int y);

	@Export(name = "drawBalls")
	public void drawBalls() {
		for (Ball ball : balls) {
			drawBall(ball.getX(), ball.getY());
		}
	}

	@Export(name = "animateJava")
	public void animateJava() {
		moveBalls();
		solveCollision();
		drawBalls();
	}

}
